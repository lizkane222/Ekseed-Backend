// {<NiceInputPassword
//     label="password"
//     name="password"
//     value={password}
//     showSecurityLevelBar
//     onChange={(e) => setPassword(e.target.value)}
//     LabelComponent={InputLabel}
//     InputComponent={TextField}
//     InputComponentProps={{
//       variant: 'outlined',
//       InputProps: {
//         endAdornment: <LockIcon />,
//       }
//     }}
//     securityLevels={[
//       {
//         descriptionLabel: <Typography>1 number</Typography>,
//         validator: /.*[0-9].*/,
//       },
//       {
//         descriptionLabel: <Typography>1 lowercase letter</Typography>,
//         validator: /.*[a-z].*/,
//       },
//       {
//         descriptionLabel: <Typography>1 uppercase letter</Typography>,
//         validator: /.*[A-Z].*/,
//       },
//     ]}
//   />}