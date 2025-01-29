

const DisplayInfo = (req,res)=>{
    
    // Format the date to match the server's local time
const ISODate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000).toISOString();
const message = {
    email:'abdlnurakani@gmail.com',
    current_datetime: ISODate,
    github_url:'https://github.com/Dan-Gaya/STAGE_ZERO.git'
}


    return res.status(200).json({
        email: message.email,
        current_datetime:message.current_datetime,
        github_url:message.github_url
    });

};

module.exports = DisplayInfo;
