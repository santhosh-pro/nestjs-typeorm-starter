import { DeleteResult, FindConditions, FindOneOptions, SelectQueryBuilder, UpdateResult } from "typeorm";
import { PagedModel } from "./paged-model";
import { SortingDirection } from "./sorting-direction";

export interface IBaseService<T> {
    findById(id: number | string, options?: FindOneOptions<T>):Promise<T>;
    findOne(options?: FindOneOptions<T> | FindConditions<T>): Promise<T>;
    isExistsById(id: number | string, options?: FindOneOptions<T>):Promise<boolean>;
    paged(queryBuilder: SelectQueryBuilder<T>,pageNumber:number,pageSize:number,orderBy:SortingDirection,orderByPropertyName:string):Promise<PagedModel<T>>;
    insert(record: T):Promise<T>;
    insertMany(records: T[]):Promise<T[]>;
    updateById(id: number | string, record: T): Promise<UpdateResult>;
    updateMany(criteria: FindConditions<T>, record: T):Promise<UpdateResult>;
    deleteById(id: number | string):Promise<DeleteResult>;
    deleteMany(criteria: FindConditions<T>):Promise<DeleteResult>;
    createQueryBuilder(alias:string):SelectQueryBuilder<T>;
}