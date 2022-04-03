import { MenuItem, Select } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Pagination from '@mui/material/Pagination'
import React, { useEffect, useState } from 'react'
import apiCaller from '../../utils/apiCaller'
import Post from './Post'
import './Style-post.css'

export default function Posts() {
  const [data, setData] = useState<[]>([])
  const [page, setPage] = useState(1)
  const [type, setType] = useState(0)
  const handleChange = (event: any, value: any) => {
    setPage(value)
  }
  const fetchData = async () => {
    const employeeData = await apiCaller('/', 'get', null, page)
    setData(employeeData?.data)
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  const buttons = [
    <Button key="one" onClick={()=>setType(0)}>Bài viết gần đây</Button>,
    <Button key="two" onClick={()=>setType(1)}>Bài viết cũ hơn</Button>,
  ]

  return (
    <div className="content-container">
      <Select
          id="demo-simple-select"
          value={type}
          onChange={(e: any)=>setType(e.target.value)}
        >
          <MenuItem value={0}>Bài viết gần đây</MenuItem>
          <MenuItem value={1}>Bài viết cũ hơn</MenuItem>
        </Select>
      {data.map((e, idx) => (
        <Post key={idx} data={e} type={type} />
      ))}
      <Pagination
        count={4}
        color="primary"
        className="pagination"
        onChange={handleChange}
        page={page}
      />
    </div>
  )
}
