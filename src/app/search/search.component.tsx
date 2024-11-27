import React, { useState, ChangeEvent } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box, IconButton, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface SearchComponentProps {
  onSearch?: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        width: '100%',
        position: 'relative'
      }}
    >
      <TextareaAutosize
        id="search-textarea"
        minRows={3}
        maxRows={5}
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Type your search here..."
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          resize: 'none',
          fontFamily: 'inherit',
        }}
      />
       <Tooltip title="Send" sx={{position: 'absolute', top: 0, right: 0}}>
        <IconButton
            onClick={() => searchText && onSearch && onSearch(searchText)}
            disabled={!searchText}
            sx={{
                position: 'absolute',
                right: '1rem',
                top: '4rem',
                cursor: 'pointer',
                color: !searchText ? 'grey' : 'primary'

            }}
        >
            <SendIcon />
        </IconButton>
    </Tooltip>
    </Box>
  );
};

export default SearchComponent;
