"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import CustomRadioInput from "@/components/__shared/ui/form/CustomRadioInput";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import CustomTextAreaInput from "@/components/__shared/ui/form/CustomTextAreaInput";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import FileUploader from "@/app/dashboard/components/shared/sell-products/FileUploader";
import Button from "@/components/__shared/ui/button/Button";
import { createClient } from "@/lib/utils/supabase/auth/client";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { toast } from "react-toastify";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/lib/typings";
import UpdateItemPage from "@/app/dashboard/components/shared/sell-products/pages/UpdateItemPage";

interface CategoryProp {
  name: string;
  value: string;
}

const UpdateProduct = () => {
  return <UpdateItemPage />;
};

export default UpdateProduct;
