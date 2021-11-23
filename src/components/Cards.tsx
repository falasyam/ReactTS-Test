import React from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  CardGroup,
  CardSubtitle,
} from "reactstrap";

class Cards extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null,
  };

  Databerita() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=34e7a31e54434339927bb5518e0019c3"
      )
      .then((response) =>
        response.data.articles.map((newsdata: any) => ({
          title: `${newsdata.title}`,
          description: `${newsdata.description}`,
          image: `${newsdata.urlToImage}`,
          create: `${newsdata.publishedAt}`,
        }))
      )
      .then((datas: any) => {
        this.setState(
          {
            datas,
            isLoading: false,
          },
          console.log
        );
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.Databerita();
  }

  render() {
    const { isLoading, datas } = this.state;
    return (
      <Row>
        {!isLoading ? (
          datas.map((data) => {
            const { title, image, description, create } = data;

            return (
              <Col xs="12" sm="6" md="4" lg="4" className="my-3">
                <CardGroup>
                  <Card key={data[title]} variant="outlined" className="shadow-lg radius-10">
                    <CardBody>
                      <CardImg src={image} title={title} />
                      <CardTitle className="h6 py-2">{title}</CardTitle>
                      <CardSubtitle className="pb-3">{create}</CardSubtitle>
                      <CardText className="">{description}</CardText>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            );
          })
        ) : (
          <Container>Loading...</Container>
        )}
      </Row>
    );
  }
}

export default Cards;
