export abstract class Step<T, R> {
  name: string;
  abstract execute(data: T): Promise<R>;
  abstract rollback(data: T): Promise<R>;
}
