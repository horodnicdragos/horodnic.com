import ENDPOINTS from './constants/endpoints'

const mailer = ({ subject }) => ({ email, text }) => {
    return new Promise((resolve, reject) => {
        fetch(ENDPOINTS.MAILER, {
            method: 'POST',
            body: JSON.stringify({ email, text, subject })
        }
        ).then(res => resolve(res)).catch(e => reject(e))
    })
}

export default mailer