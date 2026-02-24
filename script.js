
let interviewJobsList=[]
let rejectedJobsList=[]
let currentStatus = 'all'

let totalCount=document.getElementById('total-count')   
let interviewCount=document.getElementById('interview-count')
let rejectedCount=document.getElementById('rejected-count')


let toggleAllBtn = document.getElementById('toggle-all-btn')
let toggleInterviewBtn = document.getElementById('toggle-interview-btn')
let toggleRejectedBtn = document.getElementById('toggle-rejected-btn')

let allJobsList = document.getElementById('all-jobs-list')
let mainContainer = document.querySelector('main')
let filterSection = document.getElementById('filtered-section')

function calculateCount() {
    totalCount.innerText = allJobsList.children.length
    interviewCount.innerText = interviewJobsList.length
    rejectedCount.innerText = rejectedJobsList.length
}

calculateCount()


function toggleStyle(id){
    document.getElementById('toggle-all-btn').classList.remove('btn-active')
    document.getElementById('toggle-interview-btn').classList.remove('btn-active')
    document.getElementById('toggle-rejected-btn').classList.remove('btn-active')
    
    let selected=document.getElementById(id).classList.add('btn-active')  

    currentStatus = id


    if(id =='toggle-interview-btn'){
    allJobsList.classList.add('hidden')
    filterSection.classList.remove('hidden')
    renderInterviewButton()

    if(filterSection.children.length<1){
        filterSection.innerHTML=
        `<div class="job-card bg-white h-96 w-full rounded-lg border-1 border-[#F1F2F4] mt-6 flex flex-col items-center justify-center">
            <img src="jobs.png" alt="" class="h-36 w-30">
            <p class="geist font-semibold text-2xl text-[#002C5C]">No jobs available</p>
            <p class="geist text-sm text-[#64748B]">Check back soon for new job opportunities</p>
        </div>`} 


}
    else if (id=='toggle-all-btn') {
        allJobsList.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if (id == 'toggle-rejected-btn') {
        allJobsList.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejectedButton()

        if(filterSection.children.length<1){
        filterSection.innerHTML=
        `<div class="job-card bg-white h-96 w-full rounded-lg border-1 border-[#F1F2F4] mt-6 flex flex-col items-center justify-center">
            <img src="jobs.png" alt="" class="h-36 w-30">
            <p class="geist font-semibold text-2xl text-[#002C5C]">No jobs available</p>
            <p class="geist text-sm text-[#64748B]">Check back soon for new job opportunities</p>
        </div>`} 

    }

}

// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode

        const company = parenNode.querySelector('.company').innerText
        const designation = parenNode.querySelector('.designation').innerText
        const jobSpecs = parenNode.querySelector('.job-specs').innerText
        const status = parenNode.querySelector('.status').innerText
        const jd = parenNode.querySelector('.jd').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            company,
            designation,
            jobSpecs,
            status: 'Interview',
            jd
        }

        const jobExist = interviewJobsList.find(item => item.company == cardInfo.company)

        if (!jobExist) {
            interviewJobsList.push(cardInfo)
        }
        // step 2 finish
        // removing the jobs from rejected job list
        rejectedJobsList = rejectedJobsList.filter(item => item.company != cardInfo.company)

        // after remove rerender the html
        if (currentStatus == 'toggle-rejected-btn') {
            renderRejectedButton() 
        }

         calculateCount()

    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const company = parenNode.querySelector('.company').innerText
        const designation = parenNode.querySelector('.designation').innerText
        const jobSpecs = parenNode.querySelector('.job-specs').innerText
        const status = parenNode.querySelector('.status').innerText
        const jd = parenNode.querySelector('.jd').innerText

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            company,
            designation,
            jobSpecs,
            status: 'Rejected',
            jd
        }

        const jobExist = rejectedJobsList.find(item => item.company == cardInfo.company)

        if (!jobExist) {
            rejectedJobsList.push(cardInfo)
        }

        // removing the job from interview list
        interviewJobsList = interviewJobsList.filter(item => item.company != cardInfo.company)

        

        // after remove rerender the html
        if (currentStatus == "toggle-interview-btn") {
            renderInterviewButton();
        }
        calculateCount()

    }
})

// step 3  html file create
function renderInterviewButton() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // creating innerHtml
    for (let interview of interviewJobsList) {
        

        let div = document.createElement('div');
        div.className = 'job-card bg-white border-1 border-[#F1F2F4] p-6 rounded-lg flex justify-between items-start'
        div.innerHTML = `
         <div class="space-y-5">
                    <h4 class="company ag font-bold text-[#002C5C] text-[18px]">${interview.company}</h4>
                    <p class="designation ag text-[#64748B] text-[16px]">${interview.designation}</p>
                    <p class="job-specs ag text-[#64748B] text-[12px]">${interview.jobSpecs}</p>
                    <p class="status">${interview.status}</p>
                    <p class="jd ag text-[#323B49] text-[12px]">${interview.jd}</p>
                    <div>
                        <button class="interview-btn ib btn btn-outline btn-success geist">Interview</button>
                        <button class="rejected-btn rb btn btn-outline btn-error geist">Rejected</button>
                    </div> 

                </div>
                <button class="delete-btn btn btn-circle"><img src="recycle bin.png" alt="" ></button>
        `
        filterSection.appendChild(div)
    }
}

function renderRejectedButton() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // creating innerHtml
    for (let rejected of rejectedJobsList) {

        let div = document.createElement('div');
        div.className = 'job-card bg-white border-1 border-[#F1F2F4] p-6 rounded-lg flex justify-between items-start'
        div.innerHTML = `
         <div class="space-y-5">
                    <h4 class="company ag font-bold text-[#002C5C] text-[18px]">${rejected.company}</h4>
                    <p class="designation ag text-[#64748B] text-[16px]">${rejected.designation}</p>
                    <p class="job-specs ag text-[#64748B] text-[12px]">${rejected.jobSpecs}</p>
                    <p class="status">${rejected.status}</p>
                    <p class="jd ag text-[#323B49] text-[12px]">${rejected.jd}</p>
                    <div>
                        <button class="interview-btn ib btn btn-outline btn-success geist">Interview</button>
                        <button class="rejected-btn rb btn btn-outline btn-error geist">Rejected</button>
                    </div> 

                </div>
                <button class="delete-btn btn btn-circle"><img src="recycle bin.png" alt="" ></button>
        `
        filterSection.appendChild(div)
    }
}

//  delete button //
function deleteParent(buttonClassName) {
    buttonClassName.parentNode.remove()
}


