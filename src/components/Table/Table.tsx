import React, {useMemo} from 'react';
import {
    TableContainer,
    TableContent,
    TableData,
    TableDataCell,
    TableDataCellStatus,
    TableHeader,
    TableRow,
    Title
} from "./styles";
import {theme} from "../../constants/theme";
import {data} from "./data";

const columns = ['Referral event', 'Advocate', 'Friend', 'Referral status'];

const Table = () => {
    const statusOptions = ['pending', 'approved'];

    const columnWidth = useMemo(() => {
        return 100 / columns.length;
    }, [columns]);

    return (
        <TableContent>
            <Title>Referrals - 345</Title>
            <TableContainer>
                <thead>
                <TableRow>
                    {columns.map((column) => (
                        <TableHeader key={column} $columnWidth={columnWidth}>{column}</TableHeader>
                    ))}
                </TableRow>
                </thead>
                <tbody>
                {data.map((row, index) => {
                    const isStatusValid = statusOptions.some((option) => row.referralStatus.status.includes(option));
                    return (
                        <TableRow key={index}>
                            <TableData>
                                <TableDataCell>{row.referralEvent.label}</TableDataCell>
                                <TableDataCell
                                    $color={theme.colors.grey}
                                    $fontWeight={400}
                                >
                                    {row.referralEvent.date}
                                </TableDataCell>
                                <TableDataCell>${row.referralEvent.price}</TableDataCell>
                            </TableData>
                            <TableData>
                                <TableDataCell>{TruncatedText(row.advocate.email, 20)}</TableDataCell>
                                <TableDataCell $fontWeight={400}>
                                    {row.advocate.label}
                                </TableDataCell>
                            </TableData>
                            <TableData>
                                <TableDataCell>{TruncatedText(row.friend.email, 20)}</TableDataCell>
                                <TableDataCell $fontWeight={400}>
                                    {row.friend.label}
                                </TableDataCell>
                            </TableData>
                            <TableData>
                                <TableDataCell>
                                    <TableDataCellStatus>{row.referralStatus.status}</TableDataCellStatus>
                                </TableDataCell>
                                <TableDataCell
                                    $color={isStatusValid ? theme.colors.grey : theme.colors.warning}
                                    $fontWeight={400}
                                >
                                    {isStatusValid ? 'Passed fraud checks' : 'Marked as fraud'}
                                </TableDataCell>
                            </TableData>
                        </TableRow>
                    )
                })}
                </tbody>
            </TableContainer>
        </TableContent>
    )
        ;
};

export default Table;

const TruncatedText = ( text: string, maxLength: number ) => {
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    return (
        <span title={text}>
      {truncatedText}
    </span>
    );
}
