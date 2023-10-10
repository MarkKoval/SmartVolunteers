<Grid container spacing={3}>
      {/* First Column */}
      <Grid item xs={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          {/* First Row in First Column */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={3}>
              <TextField
                        label="Name"
                        id="outlined-basic"
                        type="text"
                        {...register("Name", {})}
                      />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>
              <TextField
                        label="E-mail"
                        id="outlined-basic"
                        variant="outlined"
                        type="email"
                        {...register("E-mail", {})}
                      />
              </Paper>
            </Grid>
          </Grid>
          {/* Second Row in First Column */}
          <Grid item xs={12}>
            <Paper elevation={3}>
            <TextField
                      multiline
                      fullWidth
                      label="Message"
                      id="outlined-basic"
                      variant="outlined"
                      type="text"
                      {...register("Message", {})}
                    />
            </Paper>
          </Grid>
          {/* Third Row in First Column */}
          <Grid item xs={12}>
            <Paper elevation={3}>
            <Button variant="contained" type="submit">
                      Send
                    </Button>
            </Paper>
          </Grid>
        </Paper>
        </form>
      </Grid>
      {/* Second Column */}
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: "40px", fontFamily: "Nunito" }}>
                Contact Us Now
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Nunito",
                  paddingTop: "1%",
                }}
              >
                Fill out the from below to get in touch with us. We are here to
                answer any
                <br /> questions you may have and provide the support you need.
              </Typography>
        </Paper>
      </Grid>
    </Grid>