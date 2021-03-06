import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

const Applied = props => {
  const { persons, classes, onChangeHandler } = props
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Foto</TableCell>
          <TableCell>Full Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>CellPhone</TableCell>
          <TableCell>Nationality</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {persons.map(person => {
          return (
            <TableRow key={person.id.value}>
              <TableCell>
                <img src={`${person.picture.thumbnail}`} alt="foto" />
              </TableCell>
              <TableCell component="th" scope="row">
                {`${person.name.first} ${person.name.last}`}
              </TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.cell}</TableCell>
              <TableCell>{person.nat}</TableCell>
              <TableCell>
                <Checkbox onChange={() => onChangeHandler(person.email)} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

Applied.propTypes = {
  persons: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func,
  classes: PropTypes.object
}

export default withStyles(styles)(Applied)
