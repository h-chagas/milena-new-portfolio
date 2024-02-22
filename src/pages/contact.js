import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineTextsms, MdWhatsapp, MdCall } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { sendContactForm } from "../../lib/api";

const initValues = {
  name: "",
  email: "",
  tel: "",
  location: "",
  postcode: "",
  treatType: "",
  message: "",
};

const initState = { values: initValues };

export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const options = [
    "Swedish Relaxing Massage",
    "Deep Tissue Massage",
    "Sports Massage",
    "Cupping Therapy",
    "Pregnancy Massage",
    "Electrotherapy",
    "Chair Massage",
    "Beauty Facial Express",
  ];

  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Heading className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </Heading>

          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Fill the form below, or use one of the alternative ways to contact
            located on the bottom of the page
          </p>





          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="John Doe"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>





          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="johndoe@gmail.com"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>






          <FormControl isRequired isInvalid={touched.tel && !values.tel} mb={5}>
            <FormLabel>Telephone number</FormLabel>
            <Input
              type="tel"
              name="tel"
              value={values.tel}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="07123 456789"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>






          <FormControl isRequired isInvalid={touched.location && !values.location} mb={5}>
            <FormLabel>Location</FormLabel>
            <Select
              name="location"
              value={values.location}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Select location"
            >
              <option value="Home Mobile Massage">Home Mobile Massage</option>
              <option value="Treatment Room at OL10 Heywood">
                Treatment Room at OL10 Heywood
              </option>
            </Select>
          </FormControl>


        





          {values.location === "Home Mobile Massage" && (
        <FormControl 
        isRequired={values.location === "Home Mobile Massage"}
        isInvalid={touched.postcode && !values.postcode} 
        mb={5}>
          <FormLabel>Postcode</FormLabel>
          <Input
            type="text"
            name="postcode"
            value={values.postcode}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder="M10 7KZ"
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
      )}





          {/* <FormControl
            isRequired
            isInvalid={touched.treatType && !values.treatType}
            mb={5}
          >
            <FormLabel>Treatment type</FormLabel>
            <Input
              type="text"
              name="treatType"
              value={values.treatType}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="E.g. Sports Massage"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl> */}

          <FormControl
            isRequired
            isInvalid={touched.treatType && !values.treatType}
            mb={5}
          >
            <FormLabel>Treatment type</FormLabel>
            <Select
              name="treatType"
              value={values.treatType}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Select treatment type"
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>






          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Include the day and time required..."
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>





          <Button
            variant="outline"
            colorScheme="green"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.tel ||
              !values.location ||
              !values.postcode ||
              !values.treatType ||
              !values.message
            }
            onClick={onSubmit}
          >
            Send message
          </Button>

          <p className="mb-2 mt-12 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Alternative ways to contact me
          </p>
          <div className="text-4xl flex justify-center gap-16 py-8 text-gray-600">
            <Link
              href="sms:+447478883335"
              target="_blank"
              className="hover:bg-gray-200"
            >
              <MdOutlineTextsms />
            </Link>
            <Link
              href="https://wa.me/447478883335"
              target="_blank"
              className="hover:bg-gray-200"
            >
              <MdWhatsapp />
            </Link>
            <Link
              href="tel:747-888-3335"
              target="_blank"
              className="hover:bg-gray-200"
            >
              <MdCall />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
