import React, { useEffect } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import PostIcon from './CatPostIcon';
const { Meta } = Card;

const CatPost = () => {
  const [catposts, setcatposts] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const GetCatPostData = () => {
    const url = 'https://cw2backend.tommyleong1.repl.co/catposts'
    axios.get(url)
      .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== '200') {
          alert(message, status)
        } else {
          setcatposts(data)
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    GetCatPostData();
  }, [])

  return (
    <div>
      <Row justify="space-between" align="middle">
        <Col>
          <Input.Search
            placeholder="Search cats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 300 }}
          />
        </Col>
        <Col>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={(value) => setFilter(value)}
          >
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="Persian">Persian</Select.Option>
            <Select.Option value="Siamese">Siamese</Select.Option>
            <Select.Option value="Sphynx">Sphynx</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row justify="space-around">
        <h4 style={{ color: 'green' }}>Welcome to The Pet Shelter</h4>
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          catposts
            .filter(({ breed }) => {
              if (filter === 'all') return true;
              return breed === filter;
            })
            .filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(({ id, title, comments, likes, imgURL, summary, breed }) => (
              <Col span={8} key={id}>
                <Card
                  style={{ width: 320, color: 'gray' }}
                  cover={<img src={imgURL} alt={title} />}
                  hoverable={true}
                  actions={[
                    <PostIcon type="like" count={likes} />,
                    <PostIcon type="message" count={comments} />,
                    <PostIcon type="pushpin" />,
                  ]}
                >
                  <Meta title={title} />
                  <p></p>
                  <p>{summary}</p>
                  <Link to={`/Home`}>Details</Link>
                </Card>
              </Col>
            ))
        )}
      </Row>
    </div>
  );
};

export default CatPost;