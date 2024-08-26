"use client"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PropTypes from 'prop-types';
// import 'react-phone-number-input/style.css'
import { Input } from "@/components/ui/input";
// import PhoneInput from 'react-phone-number-input'// Assuming you have a Phone component
import { FormFieldType } from "../Forms/FormSchema";

import Image from "next/image";
// import ReactDatePicker from "react-datepicker";
// import { Select, SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";

function CustomFormField({
 
  form,
  name,
  label,
  placeholder,
  icon: Icon,
  description,
  renderSkeleton,
  fieldType,
  children
}) {
  // const [value, setValue] = useState('');
  const renderField = (field) => {
    switch (fieldType) {
      case FormFieldType.PHONE:
        return <PhoneInput placeholder="Enter phone number"
          value={field.value}
          onChange={field.onChange}
          international
          limitMaxLength
          // disable={disable}
          className="input-phone"
        />

      case FormFieldType.INPUT:
        return (
          

          <div class="relative flex items-center mt-6 ">
            <span class="absolute">
              {Icon && (
              <span className="absolute">
                <Icon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
            )}
            </span>
            <Input   placeholder={placeholder} {...field} />
          </div>


        );
      case FormFieldType.DATE_PICKER:
        return (
          <div className="relative flex w-full items-center">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="user"
              className="absolute mx-2"
            />

            <ReactDatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy"
              wrapperClassName="date-picker"
            />

          </div>
        );
      case FormFieldType.SKELETON:
        return renderSkeleton ? renderSkeleton(field) : null;
      case FormFieldType.SELECT:
        return (
            
              <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger
              className="shad-select-trigger">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                <SelectContent className="shad-select-content">
                  {children}
                </SelectContent>
              </Select>
           
          );
      default:
        return (
          <div class="relative flex items-center mt-6 ">
            <span class="absolute">
              {Icon && (
           
                <Icon className="w-5 h-5 mx-3 text-gray-300 dark:text-gray-500" />
             
            )}
            </span>
            <Input   placeholder={placeholder} {...field} />
          </div>
        );
    }
  };
  

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {renderField(field)}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}


CustomFormField.propTypes = {
  fieldType:PropTypes.string.isRequired ,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string,
  renderSkeleton: PropTypes.func,
  children: PropTypes.node
};

// Define default values for optional props
CustomFormField.defaultProps = {
  iconSrc: null,
  iconAlt: 'icon',
  placeholder: '',
  description: '',
  renderSkeleton: null,
  children: null
};

export default CustomFormField;
