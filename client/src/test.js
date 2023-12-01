<Paper
variant='outlined'
sx={{
    textAlign: 'center',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    border: 'none',
    justifyContent: 'center'

}}
>
<Typography variant='h3'
    marginBottom={'20px'}
>
    Авторизация            </Typography>

<Box component={'form'}
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
>
    <div
        style={{
            display: 'flex',
            flexDirection: "column",
            width: '100%',
            alignItems: "center"

        }}
    >
        <form
            onSubmit={
                (e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }
            }
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <TextField
                color='primary'
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                color='primary'
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <div>
                {/* <Button

                >Регистрация</Button> */}
                <Button
                    type='submit'
                    onClick={handleSubmit}
                >Авторизация</Button>
            </div>
        </form>

    </div>

</Box>
</Paper>