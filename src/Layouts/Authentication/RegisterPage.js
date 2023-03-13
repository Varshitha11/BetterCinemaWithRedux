import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../store/thunks/Login';


function RegisterPage(props) {

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required")
            .min(1, "Username must be at least 1 characters")
            .max(30, "Username must not exceed 20 characters"),
        firstName: Yup.string()
            .required("userFirstName is required")
            .min(1, "userFirstName must be at least 1 characters")
            .max(20, "userFirstName must not exceed 20 characters"),
        lastName: Yup.string()
            .required("userLastName is required")
            .min(1, "userLastName must be at least 1 characters")
            .max(20, "userLastName must not exceed 20 characters"),
        password: Yup.string()
            .required("Password is required")
            .min(1, "Password must be at least 1 characters")
            .max(40, "Password must not exceed 40 characters"),
    });


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
      dispatch(RegisterUser(data));
    };


    return (
        <div className="register-form py-3">
            <div className="container col-sm-4">
                <div className='card mt-5 shadow p-3 mb-3 bg-body rounded'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label><h5>Username</h5></label>
                            <input
                                name="username"
                                type="text"
                                {...register("username")}
                                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label><h5>FirstName</h5></label>
                            <input
                                name="firstName"
                                type="text"
                                {...register("firstName")}
                                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label><h5>LastName</h5></label>
                            <input
                                name="lastName"
                                type="text"
                                {...register("lastName")}
                                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label><h5>Password</h5></label>
                            <input
                                name="password"
                                type="password"
                                {...register("password")}
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary mt-2 fs-5">
                                Register
                            </button>
                            <Link className="btn btn-danger mx-2 mt-2 fs-5" to={"/"}>
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;