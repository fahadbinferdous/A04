// dashboard //

let totalCount=document.getElementById('total-count');   // get data from dashboard
let interviewCount=document.getElementById('interview-count')
let rejectedCount=document.getElementById('rejected-count')


let availableJobs=document.getElementById('available-jobs') // get data from available jobs
let interviewJobs=document.getElementById('interview-jobs')
let rejectedJobs=document.getElementById('rejected-jobs')


                                                            
function calculateCount(){
    totalCount.innerText=availableJobs.children.length     // set updated data into dashboard from available jobs
    interviewCount.innerText=interviewJobs.children.length
    rejectedCount.innerText=rejectedJobs.children.length
} 

calculateCount()    //call the function to be effective


// available jobs filter count //
let filterCount=document.getElementById('filter-count')
filterCount.innerText=(availableJobs.children.length)+' Jobs'



