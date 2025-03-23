import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';

export const formatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDateTr = date => {
  return format(new Date(date), 'Pp');
};
