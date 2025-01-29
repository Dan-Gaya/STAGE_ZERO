

const DisplayInfo = (req,res)=>{
const currentDate = new Date();

    // Get the timezone offset in minutes and convert it to milliseconds
    const timezoneOffset = currentDate.getTimezoneOffset() * 60000;

    // Adjust the current date to local time
    const localISODate = new Date(currentDate.getTime() - timezoneOffset).toISOString();

    const message = {
        email: 'abdlnurakani@gmail.com',
        current_datetime: localISODate,
        github_url: 'https://github.com/Dan-Gaya/STAGE_ZERO'
    };


    return res.status(200).json({
        email: message.email,
        current_datetime:message.current_datetime,
        github_url:message.github_url
    });

};

module.exports = DisplayInfo;
