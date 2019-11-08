// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
jobs: Array<IJob | null> | null;
job: IJob | null;
jobByID: Array<IJob | null> | null;
dummy2: string | null;
dummy: string | null;
me: IUser | null;
bye: string | null;
hello: string;
}

interface IJobOnQueryArguments {
id: string;
}

interface IJobByIDOnQueryArguments {
customer: string;
}

interface IJob {
__typename: "Job";
id: string | null;
date: string | null;
customer: IUser | null;
landscaper: IUser | null;
type: string | null;
cost: number | null;
status: string | null;
paymentStatus: string | null;
details: string | null;
}

interface IUser {
__typename: "User";
id: string;
email: string;
}

interface IMutation {
__typename: "Mutation";
createJob: Array<IError> | null;
cancelJob: Array<IError> | null;
updateJob: Array<IError> | null;
updateBalance: Array<IError> | null;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError> | null;
login: Array<IError> | null;
logout: boolean | null;
register: Array<IError> | null;
}

interface ICreateJobOnMutationArguments {
date: string;
customer: string;
type: string;
address: string;
details: string;
status: string;
}

interface ICancelJobOnMutationArguments {
date: string;
customer: string;
landscaper: string;
type: string;
address: string;
details: string;
status: string;
}

interface IUpdateJobOnMutationArguments {
date: string;
customer: string;
landscaper: string;
type: string;
address: string;
details: string;
balance: number;
status: string;
paymentStatus: string;
}

interface IUpdateBalanceOnMutationArguments {
paymentStatus: string;
balance: number;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}
}

// tslint:enable
