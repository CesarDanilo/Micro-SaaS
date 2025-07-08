import { TableComponent } from "../components/Table/TableComponent";

export function UsersContent() {
    return (
        <div className="flex items-center justify-center min-screen">
            <div className="w-full max-w-7xl px-4">
                <TableComponent />
            </div>
        </div>


    );
}