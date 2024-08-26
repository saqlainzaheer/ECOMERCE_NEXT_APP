'use client';
import React from 'react';
import Link from 'next/link';
import CustomFormField from '@/components/global/CustomFormField';
import { useForm } from "react-hook-form";
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "@/components/ui/form";
import { FaRegUser } from "react-icons/fa";
import { z } from 'zod';

const SignUpForm = () => {
  // Getting path name
  const pathname = usePathname();

  // Validation schema for form input
  const signInFormValidation = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
  });

  // Creating react hook form and validation using zod 
  const form = useForm({
    resolver: zodResolver(signInFormValidation),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <Form {...form}>
          <form className="w-full max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-center mx-auto">
              {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo"/> */}
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                href="/login"
                className={`w-1/3 pb-4 font-medium text-center capitalize border-b dark:border-gray-400 dark:text-gray-300 ${pathname === '/login' ? 'text-gray-800 border-b-2 border-blue-500 dark:border-blue-400 dark:text-white' : 'text-gray-500'
                  }`}
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className={`w-1/3 pb-4 font-medium text-center capitalize border-b dark:border-gray-400 dark:text-gray-300 ${pathname === '/signup' ? 'text-gray-800 border-b-2 border-blue-500 dark:border-blue-400 dark:text-white' : 'text-gray-500'
                  }`}
              >
                Sign Up
              </Link>
            </div>

            <CustomFormField
              fieldType="INPUT"
              form={form}
              name="name"
              icon={FaRegUser}
              placeholder="Name"
            />
          
            <CustomFormField
              fieldType="INPUT"
              form={form}
              name="email"
              placeholder="Email"
            />

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div className="mt-6 text-center">
                <Link href="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignUpForm;
