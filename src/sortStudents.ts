
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(array: number[]): number {
  return array.reduce((sum, el) => sum + el, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Age:
    case SortType.Married:
      newStudents.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]
      ));
      break;
    case SortType.AverageGrade:
      newStudents.sort((a, b) => (order === 'asc'
        ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
        : averageGrade(b[sortBy]) - averageGrade(a[sortBy])
      ));
      break;
    default:
      break;
  }

  return newStudents;
}
