export const HIDE_MESSAGE = '[MESSAGE] CLOSE';
export const SHOW_MESSAGE = '[MESSAGE] SHOW';

export const HIDE_DIALOG = 'HIDE_DIALOG';
export const SHOW_DIALOG = 'SHOW_DIALOG';

export function hideMessage()
{
    return {
        type: HIDE_MESSAGE
    }
}

export function showMessage(message, severity)
{
    return {
        type: SHOW_MESSAGE,
        message,
        severity
    }
}

export function hideDialog()
{
    return {
        type: HIDE_DIALOG
    }
}

export function showDialog()
{
    return {
        type: SHOW_DIALOG
    }
}