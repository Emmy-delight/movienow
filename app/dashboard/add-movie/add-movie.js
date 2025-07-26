    "use client"
import { db } from "@/config/firebase.config";
import { Button, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup";


const schema = yup.object().shape({
    title: yup.string().required("Movie title is required").min(5),
    posterUrl: yup.string().url("Please Enter a vid URL"),
    status: yup.string().oneOf(["to-watch", "watched"]).required("Status is required"),
    comment: yup.string().required().min(10)
})
export default function AddMovie({userId}) {
  const {data : session} = useSession();
  const userIdentifier = userId || (session?.user?.id)
  
      const {handleSubmit,handleChange,handleBlur,touched,values,errors} = useFormik({
        initialValues: {
            title:"",
            posterUrl:"",
            status:"",
            comment:""
        },
        onSubmit: async ()=>{
           await addDoc(collection(db, "movies"),{
            user: userIdentifier,
            title: values.title,
            posterUrl: values.posterUrl,
            status: values.status,
            comment: values.comment,
            timecreated: new Date().getTime(),
           }).then(()=>{
            alert("You have added a movie")
           })
           .catch(e =>{
            console.error(e);
            alert("You encountered an error, couldnt be uploaded")
           });
        },
        validationSchema:schema
      })
      
     return (
         <Card sx={{maxWidth:500, margin: "auto", mt: 5, p: 2}}>
            <CardHeader title="Add Movie"/>
            <CardContent>
                <form onSubmit={handleSubmit}
                 className="flex flex-col gap-4">
                   <div>
                     <TextField 
                     fullWidth
                     type="text"
                     label="Movie Title"
                     id="title"
                     placeholder="Enter movie title"
                     value={values.title}
                     onChange={handleChange}
                     />
                     {touched.title && errors.title ? <span className="text-red-600 text-xs">{errors.title}</span> : null}
                  </div> 
                  <div>
                    <TextField
                    fullWidth
                    type="url"
                    label="Enter poster URL"
                    id="posterUrl"
                    value={values.posterUrl}
                    onChange={handleChange}
                    placeholder="Enter poster Url"/>
                    
                    {touched.posterUrl && errors.posterUrl ? <span className="text-red-600 text-xs">{errors.posterUrl}</span> : null}
                 </div> 
                 <FormControl>
                    <InputLabel>Status</InputLabel>
                    <Select
                    labelId="status-label"
                    id="status"
                    name="status"
                    label="status"
                    value={values.status}
                    // onBlur={handleBlur}
                    onChange={handleChange}>
                        
                        <MenuItem value="to-watch" >To watch</MenuItem>
                        <MenuItem value="watched">watched</MenuItem>
                    </Select>
                    {touched.status && errors.status ? <span className="text-red-600 text-xs">{errors.status}</span> : null}
                 </FormControl>
                   <div>
                    <TextField 
                    fullWidth
                    multiline
                    rows={3}
                    label="Comment"
                    id="comment"
                    value={values.comment}
                    onChange={handleChange}
                    placeholder="Enter comments about the movie"
                    />
                    {touched.comment && errors.comment ? <span className="text-red-600 text-xs">{errors.comment}</span> : null}
                   </div>
                   <Button type="submit" variant="contained"color="error" fullWidth >Add Movie</Button>
                   
                </form>
        
            </CardContent>

         </Card>
     )
}