import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginPost } from '../../store/thunks/Login';



function LoginPage(props) {

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({

        username: Yup.string()
            .required("Username is required")
            .min(1, "Username must be at least 1 characters")
            .max(30, "Username must not exceed 20 characters"),
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
        dispatch(loginPost(data));
    };

    return (
        <div className="register-form py-3">
            <div className="text-center py-3">
                <h1><b>BetterCinemaExperience</b></h1>
            </div>
            <div className="container col-sm-4">
                <div className='card mt-5 shadow p-3 mb-3 bg-light rounded'>
                    <div className=" py-3">
                        <h2>Sign in </h2>
                    </div>
                    <form className="py-3"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group ">
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
                            <button type="submit" className="btn btn-primary fs-5 mt-2">
                                Login
                            </button>
                            <Link className="btn btn-danger fs-5 mx-2 mt-2" to={"/"}>
                                Back
                            </Link>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;