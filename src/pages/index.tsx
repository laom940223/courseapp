
import styles from "./index.module.css";
import Head from "next/head";
import { api } from "~/utils/api";

import { CourseGrid } from "~/components/course-grid";





export default function Home() {

  
  // const ctx = api.useContext()

    api.courses.getAllCourses.useQuery()
  


  

  

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
            <CourseGrid/>        
        


    
      </main>
    </>
  );
}
