import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "../App";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser";
import logo from "../styles/logo-small.png";

export default function InvoiceScreen() {
  const { currentUser } = useContext(CurrentUser);

  const currentUserId = currentUser?._id;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/${currentUserId}`);
        const resData = await res.json();
        setUserInfo(resData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [currentUserId]);

  //sum up the order
  let sumOrder = userInfo.orderItems?.reduce((tot, c) => {
    return tot + c.product.price * c.quantity;
  }, 0);

  // //sum up the order
  let sumQuantity = userInfo.orderItems?.reduce((tot, c) => {
    return tot + c.quantity;
  }, 0);

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //get today's date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const invoiceNum = Math.floor(100000 + Math.random() * 900000);

  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <img src={logo} alt="Logo" width="100px" />
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: #{invoiceNum}</strong>
                </p>
              </MDBCol>
              <MDBCol xl="3" className="float-end">
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0"
                >
                  <MDBIcon fas icon="print" color="primary" className="me-1" />
                  Print
                </MDBBtn>
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0 ms-2"
                >
                  <MDBIcon
                    far
                    icon="file-pdf"
                    color="danger"
                    className="me-1"
                  />
                  Export
                </MDBBtn>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <p className="pt-0">thetropicalcollection.com</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#5d9fc5" }}>{userInfo.name}</span>
                </li>
                <li className="text-muted">
                  {userInfo.address}, {userInfo.city}
                </li>
                <li className="text-muted">
                  {userInfo.state}, {userInfo.zip}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> {userInfo.phone}
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">ID:</span>#{invoiceNum}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>
                  {today}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                  Paid
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {userInfo &&
                  userInfo.orderItems?.map((item) => (
                    <tr>
                      <th scope="row">1</th>
                      <td>{item.product.name}</td>
                      <td>{item.quantity}</td>
                      <td>{USDollar.format(item.product.price)}</td>
                      <td>
                        {USDollar.format(item.product.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span class="text-black me-4">SubTotal</span>
                  {USDollar.format(sumOrder)}
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span class="text-black me-4">Tax(8%)</span>
                  {USDollar.format(sumOrder * 0.08)}
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>
                  {USDollar.format(sumOrder * 1.08)}
                </span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
            </MDBCol>
            <MDBCol xl="2">
              {/* <Link to= "/payment"> */}
              <Link to= {`/payment/${currentUserId}`}>
              <MDBBtn
                className="text-capitalize"
                style={{ backgroundColor: "#60bdf3" }}
              >
                Pay Now
              </MDBBtn> 
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
