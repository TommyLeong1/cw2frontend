import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import PostIcon from './CatPostIcon';
const { Meta } = Card;

const CatPost = () => {
  const [catposts, setcatposts] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const GetCatPostData = () => {
    const url = 'https://cw2backend.tommyleong1.repl.co/catposts'
    axios.get(url)
      .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== '200') {
                    alert(message, status)
                }
                else {
                    setcatposts(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
  }
  useEffect(() => {
        GetCatPostData();
    }, [])
      return(
        <Row justify="space-around">
          <h4 style={{ color: 'green' }}> 
            Welcome to The Pet Shelter
          </h4>
          {
            catposts && catposts.map(({id, title, comments, likes, imgURL, summary, breed})=> (
              <Col span={8}>
                <Card key={id} style={{ width: 320,color: 'gray' }} 
                  cover={<img src={imgURL} alt={title} />} 
                  hoverable={true}
                  actions={[
                    <PostIcon type="like"count={likes}/>,
                    <PostIcon type="message"count={comments}/>,
                    <PostIcon type="pushpin"/>
                  ]}>
                  <Meta title={title} />
                  <p></p>
                  <p>{summary}</p>
                  <Link to={ `/Home` }>Details</Link>
                </Card>
              </Col>
            ))
          }
        </Row>
      )
    }

export default CatPost;