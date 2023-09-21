import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    creditNum: number
    cvc: number
    exp: Date
  }

export const Form = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
    // Added a little bit more validation here. Eg. the number should larger than 0 & only to choose month and year on date.
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("creditNum")} type="number" placeholder="Credit card number" min="0" id="creditNum" name="creditNum" required></input>
        <input {...register("cvc")} type="number" placeholder="CVC" id="cvc" name="cvc" min="0" required></input>   
        <input {...register("exp")} type="month" placeholder="exp" id="exp" name="exp" required></input> 
        <button type="submit" id="submit">Submit</button>
    </form>
  )
}