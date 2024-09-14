import moment from 'moment'


export const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY')
}

// Format date as 'DD/MM'
export const dateFormatddmm = (date, format = 'DD/MM') => moment(date).format(format);

// Get start of the week for a given date
export const getStartOfWeek = (date) => moment(date).startOf('isoWeek').format('DD/MM');

// Get start of the month for a given date
export const getStartOfMonth = (date) => moment(date).startOf('month').format('MM/YYYY');