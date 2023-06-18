import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import articles from './articles.json';
import { api } from './conn/connect';
import axios from 'axios';
import {LoadingOutlined} from '@ant-design/icons';

const CatPost = () => {
  const [catposts, setcatposts] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(()=>{
    axios.get(`${api.uri}/catposts`)
      .then((res)=>{
        setcatposts(res.data);
      })
      .then(()=>{
        setLoading(false);
      })
  }, []);

  if(loading){
    const antIcon = <LoadingOutlined style={{ fontSize: 48}} spin />
    return(<Spin indicator={antIcon} />);
  } else {
    if(!catposts){
      return(<div>There is no cat post available now.</div>)
    } else {
      return(
        <Row>
          {
            catposts && catposts.map(({id, title, fullText, description
                                      ,comments, likes, imgURL, summary, dateCreated, dateModified, breed})=> (
              <Col span={8} key={id}>
                <Card title={title} style={{width: 300}}>
                  <p>{fullText}</p>
                  <p>{summary}</p>
                  <p>{imgURL}</p>
                  <p>{comments}</p>
                  // <Link to= {`/a/${id}`}>Details</Link>
                </Card>
              </Col>
            ))
          }
        </Row>
      )
    }
  }
}

export default CatPost;