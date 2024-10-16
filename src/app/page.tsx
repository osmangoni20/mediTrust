import Head from "next/head";
import Meta from "@/components/common/Meta";
import Ambulance from "@/components/Home/Ambulance";
import BannerAndDoctorAdd from "@/components/Home/Banner/BannerAndDoctorAdd";
import PatientService from "@/components/Home/PatiantService";
import Features from "@/components/Home/Features";
import Prescription from "@/components/Home/Prescription";
import Doctor from "@/components/Home/Doctor";
import Medicine from "@/components/Home/Medicine";
export default function Home() {
  return (
    <div>
    <Head>
      <title>My page title</title>
      <Meta
        title="Home MedStart"
        name="viewport"
        description="initial-scale=1.0, width=device-width"
      />
    </Head>
    <BannerAndDoctorAdd/>
    <PatientService/>
    <Features/>
    <Prescription/>
    <Ambulance/>
    <Doctor/>
    <Medicine/>
  </div>
  );
}
