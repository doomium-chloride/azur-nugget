import React, { useContext } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { shipInfoURL } from '../../global';
import { Paper, Grid, GridListTile, Typography } from '@material-ui/core';
import { shipContext } from '../../App';
import FuzzySearch from 'fuzzy-search';
import { makeStyles } from '@material-ui/core/styles';
import { Ship as ShipType, Skill } from '../../types/shipTypes';
import { shipContextType } from '../../types/miscType';

const useStyles = makeStyles((theme) => ({
    layer: {
        padding: 'auto',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        flex: '1 0 auto',
    },
    section: {
        marginBottom: '1vh',
    },
    title: {
        padding: 'auto',
        height: '100%',
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    main: {
        padding: '0 1vw',
    },
}));

function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}

function checkIfSkillFixNeeded(str: string) {
    const parts = str.split('/');
    if (parts.length > 0) {
        const check = parts[0];
        return isNaN(check as any);
    }
    return false;
}

function fixSkillIconLink(shipId, link) {
    const keyWord = 'skills/';
    const parts = link.split(keyWord);
    const inject = keyWord + shipId + '/';
    if (parts && parts.length == 2 && checkIfSkillFixNeeded(parts[1])) {
        return parts[0] + inject + parts[1];
    }
    //if problem or no fix needed send normal link
    return link;
}

export function sameName(ship: ShipType, name: string){
    if(ship.names.en.toLowerCase() === name.toLowerCase()){
        return true;
    }
    if(ship.names.jp && ship.names.jp === name){
        return true;
    }
    if(ship.names.en && ship.names.en === name){
        return true;
    }
    return false;
}

function getBestMatchingShip(results: ShipType[], name: string, code: string | undefined) {
    if (!!code) {
        for (let i = 0; i < results.length; i++) {
            const peekShip = results[i];
            if (peekShip.names.code === code && sameName(peekShip, name)) {
                return peekShip;
            }
        }
    }
    return results[0];
}

export interface ShipParams {
    name: string;
    code: string;
}

function Ship() {
    const classes = useStyles();
    const context: shipContextType = useContext(shipContext);
    const { name, code } = useParams<ShipParams>();
    if (!name) {
        return null;
    }

    const results = context.byNameSearcher.search(name);

    if (results.length <= 0) {
        return null;
    }

    let ship: ShipType = getBestMatchingShip(results, name, code);

    return (
        <div className={classes.main}>
            <Grid
                container
                spacing={3}
                alignItems={'stretch'}
                justify={'center'}
                className={classes.section}
            >
                <Grid item xs={4}>
                    <Paper>
                        <img
                            src={ship.thumbnail}
                            width="166px"
                            height="166px"
                        />
                    </Paper>
                </Grid>

                <Grid
                    container
                    spacing={1}
                    item
                    xs={8}
                    alignItems={'stretch'}
                    direction={'row'}
                    justify={'space-evenly'}
                >
                    <Grid item xs={12}>
                        <Paper className={classes.layer}>
                            <Typography component="h4" variant="h4">
                                {nameSelector(ship)}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.layer}>
                            <Typography component="h4" variant="h4">
                                {ship.names.code}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <div id={'ship-skills'}>
                <Grid
                    container
                    spacing={3}
                    alignItems={'stretch'}
                    justify={'center'}
                    className={classes.section}
                >
                    <Paper className={classes.title}>
                        <Typography component="h3" variant="h3">
                            Skills
                        </Typography>
                    </Paper>
                </Grid>
                {ship.skills.map((skill, i) => (
                    <Grid
                        container
                        spacing={3}
                        alignItems={'stretch'}
                        justify={'center'}
                        className={classes.section}
                    >
                        <Grid item xs={3}>
                            <Paper>
                                <img
                                    src={fixSkillIconLink(ship.id, skill.icon)}
                                    width="128px"
                                    height="128px"
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper
                                className={classes.layer}
                                style={{
                                    backgroundColor: skill.color,
                                }}
                            >
                                <Typography component="h5" variant="h5">
                                    {skill.names.en ||
                                        skill.names.jp ||
                                        skill.names.cn ||
                                        skill.names.kr ||
                                        'No name?'}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.layer}>
                                <Typography component="p" variant="body1">
                                    {skill.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </div>
        </div>
    );
}

export default Ship;

function nameSelector(ship: ShipType) {
    //Dragon Empery
    //Sakura Empire
    switch (ship.nationality.toLowerCase()) {
        case 'sakura empire':
            return ship.names.jp || ship.names.en;
        case 'dragon empery':
            return ship.names.cn || ship.names.en;
        default:
            return ship.names.en;
    }
}
