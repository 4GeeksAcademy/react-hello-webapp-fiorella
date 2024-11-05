import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

export const CreateContact = (props) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({});
  const { id } = useParams();
  let urlLocation = useLocation().pathname;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="px-5" style={{ width: "550px" }}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ color: "#556B2F" }}
          >
            <strong>Full Name</strong>
          </label>
          <input
            onChange={(event) =>
              setNewContact({ ...newContact, name: event.target.value })
            }
            value={newContact.name || ""}
            type="text"
            className="form-control bg-light text-success"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ color: "#556B2F" }}
          >
            <strong>Email</strong>
          </label>
          <input
            onChange={(event) =>
              setNewContact({ ...newContact, email: event.target.value })
            }
            value={newContact.email || ""}
            type="email"
            className="form-control bg-light text-success"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ color: "#556B2F" }}
          >
            <strong>Phone</strong>
          </label>
          <input
            onChange={(event) =>
              setNewContact({ ...newContact, phone: event.target.value })
            }
            value={newContact.phone || ""}
            type="phone"
            className="form-control bg-light text-success"
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ color: "#556B2F" }}
          >
            <strong>Address</strong>
          </label>
          <input
            onChange={(event) =>
              setNewContact({ ...newContact, address: event.target.value })
            }
            value={newContact.address || ""}
            type="text"
            className="form-control bg-light text-success"
            placeholder="Enter address"
          />
        </div>

        <button
          onClick={async () => {
            urlLocation === "/create"
              ? await actions.createContact(newContact)
              : await actions.editContact(id, newContact);
            navigate("/");
          }}
          type="submit"
          className="mt-3 btn btn-success text-black w-100"
        >
          SAVE
        </button>

        <div className="mt-2 ml-auto">
          <Link to="/">
            <button
              className="btn btn-light text-black btn-sm "
              style={{ color: "#FF3B3F" }}
            >
              <i
                className="fa-solid fa-backward m-2"
                style={{ color: "#FF3B3F", width: "15px" }}
              ></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
