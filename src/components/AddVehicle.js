/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Alert, Form, Button,
} from 'react-bootstrap';
import { MdCheck } from 'react-icons/md';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { addVehicle } from '../redux/vehicles/vehicles';
import '../styles/AddVehicle.scss';
import { getAuth, uploadFile } from '../redux/uploadcare/uploadcare';

const DEFAULT_VALUES = {
  brand: 'Yamaha',
  model: '2003',
  description: 'Really good bike',
  price: 10000,
  image: 'image.jpg',
  visible: true,
};

function AddVehicle() {
  const dispatch = useDispatch();
  const {
    vehicles: { notice, errors },
    uploadcare: { auth, url: imageUrl },
  } = useSelector((state) => state);
  const [vehicle, setVehicle] = useState({ ...DEFAULT_VALUES });
  const [uploading, setUploading] = useState(undefined);
  const {
    price, brand, model, image, description,
  } = vehicle;

  useEffect(() => {
    if (notice) {
      setVehicle({ ...DEFAULT_VALUES });
    }
  }, [notice]);

  useEffect(() => {
    if (imageUrl && uploading) {
      setVehicle({
        ...vehicle,
        image: imageUrl,
      });
      setUploading(undefined);
    }
  }, [imageUrl, uploading]);

  useEffect(() => {
    if (!auth) dispatch(getAuth());
    else if (new Date(auth.expire) <= Date.now()) {
      dispatch(getAuth());
    } else if (uploading) {
      dispatch(uploadFile(auth, uploading));
    }
  }, [uploading, auth]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setVehicle({
        ...vehicle,
        image: undefined,
      });
      return;
    }
    const file = e.target.files[0];
    setUploading(file);
  };
  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle(vehicle));
  };
  return (
    <Form className="AddVehicle" onSubmit={handleSubmit}>
      <Container>
        <Row className="errors align-items-end">
          <Col>
            <h1 className="text-center">Add Vehicle</h1>
            {notice && <Alert variant="success">{notice}</Alert>}
            {errors.map((error) => (
              <Alert key={error} variant="danger">
                {error}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row className="vehicle-contents">
          <Col lg={8}>
            <div className={`image-panel ${!image && 'dotted'}`}>
              <input type="file" onChange={onSelectFile} />
              {image ? (
                <img src={image} alt={brand} className="img-fluid" />
              ) : (
                <>
                  {uploading ? (
                    <>Uploading...</>
                  ) : (
                    <>
                      Click to select an image
                      <br />
                      Or drag an drop it here.
                    </>
                  )}
                </>
              )}
            </div>
          </Col>
          <Col lg={4}>
            <Row>
              <Form.Control
                type="text"
                placeholder="Brand"
                name="brand"
                value={brand}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Form.Control
                type="text"
                placeholder="Model"
                name="model"
                value={model}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Button variant="primary" type="submit" disabled={!image}>
                <MdCheck />
                Create
                <AiOutlineRightCircle />
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
export default AddVehicle;
