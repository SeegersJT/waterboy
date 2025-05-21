import fs from 'fs';
import dayjs from 'dayjs';

const time_taken_records = [];

const LoggingMiddleware = async (req, res, next) => {
    const time_started = new Date();

    const default_send = res.send;

    let response_data = null;
    res.send = (data) => {
        response_data = data;

        return default_send.bind(res)(data);
    }

    await next();
    const time_responded = new Date();

    const time_taken = time_responded.valueOf() - time_started.valueOf();

    console.log(`The request took ${time_taken}ms to respond`);

    const log_event = {
        user_id: req.session?.user_id || null,
        ip: req.header('x-forwarded-for') || req.socket.remoteAddress,
        response_data,
        time_taken
    }
    // Insert to DB

    time_taken_records.push(time_taken);
    if(time_taken_records.length >= 100) time_taken_records.splice(0, 1);

    const avg_request_time = time_taken_records.reduce((a, b) => a+b, 0) / time_taken_records.length;

    console.log(`Average request time: ${avg_request_time}ms`);

    try {
        fs.mkdirSync('logs');
    } catch(_) {}

    fs.appendFileSync(`logs/${dayjs().format('YYYY-MM-DD')}.log`, JSON.stringify(log_event) + '\r\n');
}

export default LoggingMiddleware;
