import { useState } from "react";
import axios from "axios";

export default function Form() {

    const [formData, setFormData] = useState([
        {
            title: "",
            description: "",
        }
    ]);
    const API = process.env.REACT_APP_API_URL;

    const handleInputChange = (input) => {
        const { name, value } = input.target;
        console.log(input)
        setFormData({ ...formData, [name]: value });
      };

    function submitHandler(event) {
        console.log(formData);
        event.preventDefault();

        axios.post(API, formData)
    }

  return (
    <form className="row g-3 pt-4">

      <div className="form-floating mb-3 col-auto">
        <input
          type="text"
          className="form-control"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          name="title"
        />
        <label htmlFor="title">Email address</label>
      </div>

      <div className="form-floating col-auto">
        <input
          type="text"
          className="form-control"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
        />
        <label htmlFor="description">Description</label>
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={submitHandler}>
          Submit
        </button>
      </div>

    </form>
  );
}
