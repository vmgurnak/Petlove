import { IWorkDays } from '../../../types.ts';

const WorkStatus = (workDays: IWorkDays): string => {
  const jsDay = new Date().getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

  let workStatus: string;

  if (!workDays || workDays.length === 0) {
    workStatus = 'Day and night';
  } else {
    const today = workDays[todayIndex];

    if (!today) {
      workStatus = 'Day and night';
    } else if (today.isOpen) {
      workStatus = `${today.from.replace(':', '.')} - ${today.to.replace(
        ':',
        '.'
      )}`;
    } else {
      workStatus = 'Close';
    }
  }

  return workStatus;
};

export default WorkStatus;
