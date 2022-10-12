import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination(nPages, currentPage, setCurrentPage) {
  const changePage =(event, value)=>{
    setCurrentPage(value);
  }
  return (
    <Stack spacing={2}>
      <Pagination count={nPages} color="primary" page={currentPage} onChange={changePage} />
    </Stack>
  );
}