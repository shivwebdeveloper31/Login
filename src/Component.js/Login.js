import React from "react";
import './Login.css';
import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit, formState: { errors }, reset } =useForm();

    const onSubmit = (data) => {console.log(data); reset(); };



    return (
        <>
            <div className="big">
                <div className="Container">
                    <div className="box1">
                        <div className="icon">
                            <i className="fas fa-user-friends"></i>
                        </div>
                        <div className="Heading">
                            Login
                        </div>
                        <div className="content">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="phone" name="phone"  placeholder="Enter Your Phone Number" {...register("phone", {required: "Phone Number is Required", 
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Only Numbers are allowed",
                                } })} ></input><br /><br />
                                {errors.phone && (<p>{errors.phone.message}</p>)}

                                <input type="submit" value="Send OTP"></input>

                            </form>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Login