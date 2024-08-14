const teamData = [
    {
      category: "Honorary Patron",
      members: [
        { name: "Dr. Sunil Rai", position: "Chancellor, UPES, India" }
      ]
    },
    {
      category: "Chief Patron",
      members: [
        { name: "Dr. Ram Sharma", position: "Vice Chancellor, UPES, India" }
      ]
    },
    {
      category: "Patron",
      members: [
        { name: "Mr. Manish Madaan", position: "Registrar, UPES Dehradun" }
      ]
    },
    {
      category: "Organizing Chairs Deans",
      members: [
        { name: "Dr. Vijaysekhar Chellaboina", position: "UPES, India" },
        { name: "Dr. Ravi S Iyer", position: "UPES, India" }
      ]
    },
    {
      category: "Program Chair(s)",
      members: [
        { name: "Dr. Vinod Patidar", position: "UPES, India" },
        { name: "Dr. Neelu Jyothi Ahuja", position: "UPES, India" },
        { name: "Dr. Mrittunjoy Guha Majumdar", position: "UPES, India" },
        { name: "Dr. Muthukumar Ka", position: "UPES, India" }
      ]
    },
    {
      category: "Convenor",
      members: [
        { name: "Dr. Ajay Prasad", position: "UPES, India" },
        { name: "Dr. Sushabhan Chodhury", position: "UPES, Dehradun" }
      ]
    },
    {
      category: "Technical Chairs",
      members: [
        { name: "Dr. Anil Kumar", position: "UPES, India" },
        { name: "Dr. Hitesh Kumar Sharma", position: "UPES, India" },
        { name: "Dr. Priya Ranjan", position: "UPES, India" },
        { name: "Dr. Sunil Gupta", position: "UPES, India" },
        { name: "Dr. Kunal Mukhopadhyay", position: "BIT Mesra Ranchi" },
        { name: "Dr. Soubhik Chakraborty", position: "BIT Mesra Ranchi" }
      ]
    },
    {
      category: "Publicity Chairs",
      members: [
        { name: "Dr. Prashant Pranav", position: "BIT Mesra Ranchi" },
        { name: "Dr. Akriti Nigam", position: "BIT Mesra Ranchi" },
        { name: "Dr. Indrajit Mukherjee", position: "BIT Mesra Ranchi" },
        { name: "Mr. Pankaj Badoni", position: "UPES, India" },
        { name: "Mr. Keshav Kaushik", position: "UPES, India" },
        { name: "Professor B. Balamurugan", position: "Shiv Nadar University, Greater Noida, India" },
        { name: "Dr. Sudip Kumar Sahana", position: "BIT Mesra Ranchi" }
      ]
    },
    
  {
    category: "Organizing Committee",
    members: [
      { name: "Dr. Abhijit Kumar", position: "UPES, India" },
      { name: "Dr. Abhirup Khanna", position: "UPES, India" },
      { name: "Dr. Achala Shakya", position: "UPES, India" },
      { name: "Dr. Adrash Kumar", position: "UPES, India" },
      { name: "Dr. Akashdeep Bhardwaj", position: "UPES, India" },
      { name: "Dr. Akhilesh Mohan Srivastava", position: "UPES, India" },
      { name: "Dr. Alind", position: "UPES, India" },
      { name: "Dr. Alok Aggarwal", position: "UPES, India" },
      { name: "Dr. Amar Jindal", position: "UPES, India" },
      { name: "Dr. Amar Shukla", position: "UPES, India" },
      { name: "Dr. Amarendra Tripathi", position: "UPES, India" },
      { name: "Dr. Ambika Aggarwal", position: "UPES, India" },
      { name: "Dr. Amit Verma", position: "UPES, India" },
      { name: "Dr. Amrendra Tripathi", position: "UPES, India" },
      { name: "Dr. Anish Kumar Vishwakarma", position: "UPES, India" },
      { name: "Dr. Anurag Jain", position: "UPES, India" },
      { name: "Dr. Anushree Sah", position: "UPES, India" },
      { name: "Dr. Archana Kumari", position: "UPES, India" },
      { name: "Dr. Arjun Arora", position: "UPES, India" },
      { name: "Dr. Arun Singh Bhadwal", position: "UPES, India" },
      { name: "Dr. Aviral Sharma", position: "UPES, India" },
      { name: "Dr. Avishek Majumder", position: "UPES, India" },
      { name: "Dr. Avita Katal", position: "UPES, India" },
      { name: "Dr. Bhawana Kaushik", position: "UPES, India" },
      { name: "Dr. Bhupendra Singh", position: "UPES, India" },
      { name: "Dr. C Nelson", position: "UPES, India" },
      { name: "Dr. Chandra Mani Sharma", position: "UPES, India" },
      { name: "Dr. Chhotelal Kumar", position: "UPES, India" },
      { name: "Dr. Deepak Kumar Sharma", position: "UPES, India" },
      { name: "Dr. Deepika Koundal", position: "UPES, India" },
      { name: "Dr. Dhirendra Kumar Sharma", position: "UPES, India" },
      { name: "Dr. Dhiviya Rose J", position: "UPES, India" },
      { name: "Dr. Gagandeep Singh", position: "UPES, India" },
      { name: "Dr. Gaytri", position: "UPES, India" },
      { name: "Dr. Goutam Datta", position: "UPES, India" },
      { name: "Dr. Hanumat Sastry", position: "UPES, India" },
      { name: "Dr. Hemant Petwal", position: "UPES, India" },
      { name: "Dr. Juhi Agarwal", position: "UPES, India" },
      { name: "Dr. Kamal Raj Singh", position: "UPES, India" },
      { name: "Dr. Kapil Gupta", position: "UPES, India" },
      { name: "Dr. Kaushik Ghosh", position: "UPES, India" },
      { name: "Dr. Keshav Kaushik", position: "UPES, India" },
      { name: "Dr. Khushboo Jain", position: "UPES, India" },
      { name: "Dr. Kingshuk Srivastava", position: "UPES, India" },
      { name: "Dr. Kotha Venugopalachary", position: "UPES, India" },
      { name: "Dr. Manish Kumar Giri", position: "UPES, India" },
      { name: "Dr. Manobendra Nath Mondal", position: "UPES, India" },
      { name: "Dr. Mitali Chugh", position: "UPES, India" },
      { name: "Dr. Mohammad Ahsan", position: "UPES, India" },
      { name: "Dr. N Prasanthi Kumari", position: "UPES, India" },
      { name: "Dr. Nadeem Yousuf Khanday", position: "UPES, India" },
      { name: "Dr. Nayantara Kotoky", position: "UPES, India" },
      { name: "Dr. Neeraj Chugh", position: "UPES, India" },
      { name: "Dr. Nitika Nigam", position: "UPES, India" },
      { name: "Dr. Nunna Prasanthi Kumari", position: "UPES, India" },
      { name: "Dr. Pallabi Sharma", position: "UPES, India" },
      { name: "Dr. Panduranga Raviteja", position: "UPES, India" },
      { name: "Dr. Pankaj Badoni", position: "UPES, India" },
      { name: "Dr. Pankaj Kundan Dadure", position: "UPES, India" },
      { name: "Dr. Piyush Rawat", position: "UPES, India" },
      { name: "Dr. Pooja Sarin", position: "UPES, India" },
      { name: "Dr. Poonam Kainthura", position: "UPES, India" },
      { name: "Dr. Prabhat Ranjan Singh", position: "UPES, India" },
      { name: "Dr. Priyanka Singh", position: "UPES, India" },
      { name: "Dr. Rahul Kumar", position: "UPES, India" },
      { name: "Dr. Rahul Singh", position: "UPES, India" },
      { name: "Dr. Ram Kumar", position: "UPES, India" },
      { name: "Dr. Ravi Yadav", position: "UPES, India" },
      { name: "Dr. Richa Choudhary", position: "UPES, India" },
      { name: "Dr. Rohit Srivastava", position: "UPES, India" },
      { name: "Dr. Rohit Tanwar", position: "UPES, India" },
      { name: "Dr. Roohi Sille", position: "UPES, India" },
      { name: "Dr. Sachi Choudhary", position: "UPES, India" },
      { name: "Dr. Sahinur Rahman Laskar", position: "UPES, India" },
      { name: "Dr. Sandeep Pratap Singh", position: "UPES, India" },
      { name: "Dr. Sandip Kumar Chaurasiya", position: "UPES, India" },
      { name: "Dr. Sanjeev Kumar", position: "UPES, India" },
      { name: "Dr. Sanoj Kumar", position: "UPES, India" },
      { name: "Dr. Saroj Snehal Shivagunde", position: "UPES, India" },
      { name: "Dr. Saswata Shannigrahi", position: "UPES, India" },
      { name: "Dr. Saurabh Jain", position: "UPES, India" },
      { name: "Dr. Saurabh Shanu", position: "UPES, India" },
      { name: "Dr. Shahid Sultan Hajam", position: "UPES, India" },
      { name: "Dr. Shahina Anwarul", position: "UPES, India" },
      { name: "Dr. Shaurya Gupta", position: "UPES, India" },
      { name: "Dr. Shreya Banerjee", position: "UPES, India" },
      { name: "Dr. Shubhi Sharma", position: "UPES, India" },
      { name: "Dr. Sonal Talreja", position: "UPES, India" },
      { name: "Dr. Sonali Vyas", position: "UPES, India" },
      { name: "Dr. Subhankar Ghosal", position: "UPES, India" },
      { name: "Dr. Sugandha Sharma", position: "UPES, India" },
      { name: "Dr. Surbhi Saraswat", position: "UPES, India" },
      { name: "Dr. Swati Rastogi", position: "UPES, India" },
      { name: "Dr. Syed Sajid Hussain", position: "UPES, India" },
      { name: "Dr. Tanu Singh", position: "UPES, India" },
      { name: "Dr. Touseef Iqbal", position: "UPES, India" },
      { name: "Dr. Varun Sapra", position: "UPES, India" },
      { name: "Dr. Ved Prakash Bharadwaj", position: "UPES, India" },
      { name: "Dr. Vibhu Jately", position: "UPES, India" },
      { name: "Dr. Vidyanand Mishra", position: "UPES, India" },
      { name: "Dr. Vijendra Singh", position: "UPES, India" },
      { name: "Dr. Virender Kadyan", position: "UPES, India" },
      { name: "Dr. Yeshwant Singh", position: "UPES, India" }
    ]
  },
  {
    category: "International/National Advisory Board",
    members: [
      { name: "Dr. Saad Aldosary", position: "Department of Computer Science, Community College, King Saud University, Saudi Arabia" },
      { name: "Dr. Moustafa Hussien Aly", position: "Arab Academy for Science, Technology and Maritime Transport, Egypt" },
      { name: "Dr. Walid El-Shafai", position: "Menoufia University, Egypt" },
      { name: "Dr. Fahri Özsungur", position: "Mersin University, Turkey" },
      { name: "Dr. Sanghamitra Bandyopadhyay", position: "Indian Statistical Institute (ISI), Kolkata" },
      { name: "Dr. Vijay Nath", position: "BIT Mesra Ranchi & Executive Member of IETE & ISVE Ranchi Jharkhand India" },
      { name: "Dr. Nitish Kumar Guru", position: "Directorate of Forensic Science and Laboratory, Jharkhand, Ranchi, India" },
      { name: "Dr. Aditya Raj", position: "Scientist, National Informatics Centre, MeitY, India" },
      { name: "Dr. Amit Kumar Dwivedi", position: "Bennett University, India" },
      { name: "Vijay Prakash", position: "RESEARCH SUPPORT OFFICER III, University of Malta, Malta" },
      { name: "Prof. Raja Datta", position: "IIT Kharagpur, India" },
      { name: "Dr. Soumyabrata Chakrabarty", position: "Space Applications Centre, Ahmedabad, India" },
      { name: "Dr. M. P. Jain", position: "Pro Chancellor, IMS Unison University, India" },
      { name: "Prof. Jeetendra Pande", position: "Uttarakhand Open University, India" },
      { name: "Dr. Niranjan Prasad", position: "DIRECTOR-II (Scientist-F), Defense Research & Development Organization (DRDO). India" },
      { name: "Dr. Talwar Yoginder", position: "Scientist at National Informatics Centre, Min. of Communications & IT, Delhi, India" },
      { name: "Mr. Rajat Goel", position: "Principal Engineer at Dropbox, San Jose, California, United States" },
      { name: "Ms. Nandita Goel", position: "Principal Data Scientist, Sunnyvale, California, United States" },
      { name: "Dr. Sudip Kumar Sahana", position: "BIT Mesra Ranchi" },
      { name: "Dr. P. Kumar", position: "Associate Professor, IIT Patna" },
      { name: "Dr. S. Pal", position: "Professor, BIT Mesra Ranchi" },
      { name: "Dr. S.S. Solanki", position: "Professor, BIT Mesra, Ranchi" },
      { name: "Dr. S. Kumar", position: "Asso. Professor, BIT Mesra, Ranchi & Executive Member of IETE Ranchi" },
      { name: "Dr. V.K. Jha", position: "Associate Professor, BIT Mesra, Ranchi" },
      { name: "Dr. Rajeev Kumar Ranjan", position: "Associate Professor ISM, Dhanbad" },
      { name: "Dr. Amritanjali", position: "Assistant Professor BIT Mesra Ranchi" },
      { name: "Dr. Deepak Prasad", position: "Assistant Professor, Sarala Birla University Ranchi" },
      { name: "Dr. P. Kumar", position: "Associate Professor CIT Ranchi" },
      { name: "Dr. Abhishek Pandey", position: "Associate Professor, Usha Martin University, Ranchi" }
    ]
  },
    {
      category: "Technical Program Committee",
      members: [
        { name: "Dr. Rajiv Ranjan", position: "BIT Sindri" },
  { name: "Dr. P. Chinnasamy", position: "MLR Institute of Technology, Hyderabad, Telangana, India" },
  { name: "Dr. Amar Prakash Sinha", position: "Associate Professor BIT Sindri" },
  { name: "Dr. Sanchita Paul", position: "Associate Professor BIT Mesra Ranchi" },
  { name: "Dr. Sumit Srivastava", position: "Assistant Professor, BIT Mesra Ranchi" },
  { name: "Dr. D.K. Malik", position: "Associate Professor, BIT Mesra, Ranchi" },
  { name: "Dr. K.K. Senapati", position: "Assistant Professor, BIT Mesra, Ranchi" },
  { name: "Dr. K.K. Patnaik", position: "Associate Professor, IIIT Gwalior" },
  { name: "Dr. Sweta Srivastava", position: "Amity University" },
  { name: "Dr. Nihar Ranjan Roy", position: "Sharda University, UP, India" },
  { name: "Dr. Bharat Bhushan", position: "Sharda University, UP, India" },
  { name: "Dr. Anirban Ghatak", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. Soumik Das", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. Arijit Ghosh", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. Syeda Darakhshan Jabeen", position: "BIT Mesra Ranchi" },
  { name: "Dr. Anjana Pradhan Ghorai", position: "BIT Mesra Ranchi" },
  { name: "Dr. S. Padhi", position: "BIT Mesra Ranchi" },
  { name: "Prof. Supratim Biswas", position: "BIT Mesra Ranchi" },
  { name: "Dr. Vandana Bhattacharjee", position: "BIT Mesra Ranchi" },
  { name: "Dr. Sandip Dutta", position: "BIT Mesra Ranchi" },
  { name: "Dr. (Mrs.) Aruna Jain", position: "BIT Mesra Ranchi" },
  { name: "Dr. Shashank Pushkar", position: "BIT Mesra Ranchi" },
  { name: "Prof. Anup Dewanji", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. Sourav Chakraborty", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. Debrup Chakraborty", position: "Indian Statistical Institute (ISI), Kolkata" },
  { name: "Dr. I. Manna", position: "VC, BIT Mesra, Ranchi" },
  { name: "Dr. M.K. Mishra", position: "Former VC, BIT Mesra, Ranchi" },
  { name: "Dr. S. Konar", position: "Former VC, BIT Mesra, Ranchi" },
  { name: "Sh. R. Mishra", position: "Former CMD, HEC, Ranchi" },
  { name: "Dr. D.K. Tiwari", position: "IAS, Chief Secretary Govt. of Jharkhand" },
  { name: "Sh. Sudhir Tripathi", position: "IAS, Former Chief Secretary Govt. of Jharkhand" },
  { name: "Sh. Rakesh Sharma", position: "IAS, Secretary Higher Education Govt. of Jharkhand" },
  { name: "Dr Chandrashekhar Azad", position: "National Institute of Technology, Jamshedpur, India" },
  { name: "Dr. Gopa Bhaumik", position: "National Institute of Technology, Jamshedpur, India" },
  { name: "Dr. Sushma Kakkar", position: "Sharda University, Greater Noida" }
      ]
    },
    {
      category: "Secretary & Treasurer",
      members: [
        { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
      ]
    },
    // {
    //   category: "Publication Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },
    // {
    //   category: "Registration Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },

    // {
    //   category: "Website & It Support Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },
    // {
    //   category: "Local Management Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },

    // {
    //   category: "Cultural Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },
    // {
    //   category: "Hospitality Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // },
    // {
    //   category: "Event Committee",
    //   members: [
    //     // { name: "Dr. Keshav Sinha", position: "UPES, Dehradun" }
    //   ]
    // }
  ];
  
  export default teamData;