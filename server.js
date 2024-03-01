const app=require("./app.js")
const PORT=process.env.PORT || 3030
app.listen(PORT,()=>{
    console.log(`app is listinig on ${PORT}`);
})