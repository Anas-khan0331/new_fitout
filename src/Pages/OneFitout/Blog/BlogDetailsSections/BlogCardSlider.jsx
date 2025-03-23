import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import blogDetailJson from "../../../../../public/blog.json"; // Assuming the data is saved here

const BlogCardSlider = () => {
  // Split the data into chunks of 3 for each carousel item (adjust for mobile display)
  const chunkedData = blogDetailJson.reduce((result, value, index, array) => {
    if (index % 3 === 0) {
      result.push(array.slice(index, index + 3)); // Creates chunks of 3 items
    }
    return result;
  }, []);

  return (
    <div className="container my-5">
      <Carousel
        interval={2000} // Set interval for slide change
        wrap={true} // Ensures infinite loop
        controls={false} // Optional, if you want to hide default next/prev controls
        indicators={false} // Optional, if you want to hide default indicators
        pause="hover" // Pauses the carousel when hovered over
        touch={true} // Enables swipe gestures for mobile
        ride="carousel" // Ensures that the carousel auto-starts
      >
        {chunkedData.map((chunk, chunkIndex) => (
          <Carousel.Item key={`chunk-${chunkIndex}`}>
            <Row className="d-flex justify-content-center">
              {/* Center the card horizontally */}
              {chunk.map((blog) => (
                <Col
                  key={blog.serial}
                  xs={12} // Full width on mobile
                  sm={6} // Half width on small screens
                  md={4} // 1/3 width on medium screens
                  lg={4} // 1/3 width on large screens
                  className="mb-4"
                >
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.category}</Card.Text>
                      <Card.Text>{blog.community}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCardSlider;
