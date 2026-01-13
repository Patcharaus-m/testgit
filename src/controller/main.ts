const httpStatusCode: ITypeHttpStatusCodes = {
    Created: 201,
}

function successRes<T= null> (payload: T): ITypeSuccess<T> {
    return {
        code: httpStatusCode.Created,
        status: 2001,
        error: null,
        payload,
    }
}

export {successRes}