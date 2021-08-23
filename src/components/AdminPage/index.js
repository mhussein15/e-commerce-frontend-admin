import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useHistory ,Redirect} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { signin } from "../../store/actions/authActions";

export default function AdminSignIn() {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  

  const onSubmit = (data) => {
    dispatch(signin(data, history));
  };
  if (user) return <Redirect to="/" />;

  return (
    <>
      <ToastContainer autoClose={2000} />

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <div className="row w-50">
          <div className="col-12">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
              <h1 style={{ fontSize: "31px" }} className="text-center mb-5">
                SignIn
              </h1>
              <div class="form-group">
                <input
                  className="form-control p-2"
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
              </div>
              <div class="form-group">
                <input
                  className="form-control"
                  type={password ? "password" : "text"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onClick={() => setPassword(!password)}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check Password
                  </label>
                </div>
              </div>
              <input type="submit" className="btn btn-outline-dark w-100 " />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
