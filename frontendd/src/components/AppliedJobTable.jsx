
import React from 'react'
import { Table,TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from "@/components/ui/badge"
const AppliedJobTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your applied jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>{
                    [1, 2, 3 ,4].map((item, index) => {
                         return <TableRow key={index}>
                            <TableCell>17-07-2026</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className = 'text-right'><Badge className='bg-black text-amber-50'>Selected</Badge></TableCell>
                        </TableRow>
                    })

                }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable