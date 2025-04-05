class Student {
  private name: string;
  protected role: string;
  courses: Array<string>;

  constructor(name: string, role: string, courses: [] = []) {
    (this.name = name), (this.role = role), (this.courses = courses);
  }
}
