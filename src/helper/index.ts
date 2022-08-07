import dayjs from 'dayjs';

/**
 * format date to DD/MM/YYYY
 * @param date
 */
export const formatDate = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY');
};
