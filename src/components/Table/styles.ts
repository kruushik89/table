import styled, {css} from "styled-components";
import {theme} from "../../constants/theme";

type CellProps = {
  $columnWidth?: number;
};
type TableDataCellProps = {
  $color?: string;
  $fontWeight?: number;
};

const Cell = css`
  text-align: start;
  vertical-align: top;
  font-weight: 600;
  border-bottom: 1px solid ${theme.colors.lightGrey};
  padding-top: 15px;
  padding-bottom: 15px;
`

export const TableContainer = styled.table`
 width: 100%;
`

export const TableContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 25px auto;

  @media (max-width: ${() => theme.breakpoint.sm}) {
    min-width: 800px;
  }
`

export const TableRow = styled.tr`
  
`

export const TableHeader = styled.th<CellProps>`
  ${Cell};
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.primary};
  width: ${({ $columnWidth }) => $columnWidth}%;
`;

export const TableData = styled.td`
  ${Cell};
  font-size: ${theme.fontSize.sm};
`

export const TableDataCell = styled.p<TableDataCellProps>`
  color: ${({$color}) => $color ? $color : theme.colors.primary};
  font-weight: ${({$fontWeight}) => $fontWeight ? $fontWeight : 600};
`

export const TableDataCellStatus = styled.span`
  text-transform: capitalize;
`

export const Title = styled.div`
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.dark};
  font-weight: 600;
`