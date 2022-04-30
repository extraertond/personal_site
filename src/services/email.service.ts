import emailjs from "@emailjs/browser";

export const sendEmail = async (body: Record<string, unknown> | undefined) => {
    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAIL_USER_ID as string;

    try {
        // status 200 ok
        const response = await emailjs.send(serviceId, templateId, body, userId);
        return response.status;
    } catch (e) {
        console.log(e);
        return 500;
    }
};
