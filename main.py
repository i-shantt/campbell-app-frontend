from fastapi import FastAPI, Request
import yaml
import vertexModels
import markdown


app = FastAPI()

with open("parameters.yaml", "r") as yamlfile:
    parameters = yaml.safe_load(yamlfile)


# Set project-related variables from parameters
project_id = parameters['PROJECT_ID']
location = parameters['LOCATION']
region = parameters['REGION']
data_store_id = parameters['DSNAME']
engine_id = parameters['DENAME']


@app.get("/")  # This creates a GET request at the root path ("/")
async def root():
    return {"message": "Hello World"}

@app.post("/load_search_results")
async def load_search_results(request: Request):
  print("Generating grounding data from document search...")
  data = await request.json()
  if (data["vais_search_query"] == 'Custom'):
     search_query = data["custom_query"]
  elif (data["vais_search_query"] == 'VAIS'):
      print("Converting to VAIS search")
  else: 
     search_query =  data["vais_search_query"] 

  # Call vertexModels.search_sample function to execute the search
  search_results = vertexModels.search_sample(project_id, location, engine_id, search_query)
  # Extract and format grounding data
  grounding_data = search_results.summary.summary_text
  grounding_data = markdown.markdown(grounding_data)
  print(grounding_data)
  return str(grounding_data)

